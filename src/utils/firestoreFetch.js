import {query,orderBy ,where , collection, getDocs,doc,getDoc} from "firebase/firestore";
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

