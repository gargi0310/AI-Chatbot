import { useState } from 'react' 
import './App.css'
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("loading...")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBMl8adDIrYcZmmCDjO4XdzDNM-xu-hHvM",
      method:"post",
      data:{
        "contents": [{
          "parts":[{"text": question}]
          }],
        },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    
  }

  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
            <h1 className="text-4xl font-semibold text-center text-white bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-lg shadow-lg mb-6">
                AI ChatBot
            </h1>
            
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
                <textarea 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ask me anything..."
                ></textarea>

                <button 
                    onClick={generateAnswer} 
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                >
                    Generate Answer
                </button>

                
            </div>
            <p className="mt-4 text-md text-gray-700">{answer}</p>
        </div>
    </>
  )
}

export default App
