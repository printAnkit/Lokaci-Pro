import { MessageCircle } from "lucide-react";

export default function WhatsappMe(){
    return(
        <div>
            <h1>LInk is here</h1>
            <a href="https://wa.me/919876543210?text=Hello%20Lokaci%2C%20I%20have%20to%20optimize%20my%20salon." className="fixed bottom-6 left-6 h-12 w-12 rounded-full bg-blue-600 shadow-lg hover:shadow-xl hover-scale grid place-items-center"><MessageCircle className="w-6 h-6 text-white"/></a>
        </div>
    )
}