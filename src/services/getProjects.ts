import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default async function ProjectsList(): Promise<Project[]>{
  const querySnapshot = await getDocs(collection(db, "projects"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">)
  }));
}

