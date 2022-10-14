import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

const notesCollectionReference = collection(db, 'notes');

class NoteDataServices {
  addNote = (note) => {
    return addDoc(notesCollectionReference, note);
  };
  updateNote = (id, updatedNote) => {
    const noteDoc = doc(db, 'notes', id);
    return updateDoc(noteDoc, updatedNote);
  };
  deleteNote = (id) => {
    const noteDoc = doc(db, 'notes', id);
    return deleteDoc(noteDoc);
  };
  fetchAllNotes = () => {
    return getDocs(notesCollectionReference);
  };
  togglePinNote = (id, updatedNote) => {
    const noteDoc = doc(db, 'notes', id);
    return updateDoc(noteDoc, updatedNote);
  };
}

export default new NoteDataServices();
