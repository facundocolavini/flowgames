import {query,orderBy ,where , collection, getDocs,doc,getDoc,setDoc ,updateDoc,increment} from "firebase/firestore";
import db from './firebaseConfig';

export const getAllGames = async(idGenre)=>{
    let q;
    if(idGenre){
        q=query(collection(db,'games'),where('genreId','==',idGenre));
    }else{
        q = query(collection(db,'games') ,orderBy('name'));
    }
  
    const querySnapshot = await getDocs(q);
    const dataFromfirestore = querySnapshot.docs.map(document => 
        //Add id to my object document of firestore 
        ({
            id: document.id,
            ...document.data()
        }));
        return dataFromfirestore;
}

export const GetOne = async (idItem) => {
    const docRef = doc(db, "games", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}


//Add a new Item on my Document 
export const AddItem = async (newValue) =>{
    const newDocRef = doc(collection(db, 'orders'));
    await setDoc(newDocRef,newValue);
    return newDocRef;
}

//Update a propierti on a document
export const UpdateItem = async (idValue,updateValue)=>{
        const itemRef = doc(db,"games",idValue);
        await updateDoc(itemRef,updateValue)
   
}


export const UpdateStock = async (idValue,keyUpdate,valueUpdate)=>{
    const itemRef = doc(db,"games",idValue);
    await updateDoc(itemRef,{ [keyUpdate]: increment(-valueUpdate)})
   
}

 
 