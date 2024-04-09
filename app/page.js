import Image from "next/image";
import Texting from "./components/Texting";
import ImageUploader from "./components/ImageUploader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-blue-900">
      
     <Texting />
    </main>
  );
}
