import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase-config"


export const UserContext = createContext()

export function UserContextProvider(props) {


  const signUp = (nom,prenom,email,homme,femme,mdp,mdp_vf) => createUserWithEmailAndPassword(auth,nom,prenom,email,homme,femme,mdp,mdp_vf) 
 const signIn = (email, mdp) => signInWithEmailAndPassword(auth, email, mdp)

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  console.log("MAJ", currentUser);
  
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, [])



  return (
    <UserContext.Provider value={{ signUp,currentUser, signIn}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}