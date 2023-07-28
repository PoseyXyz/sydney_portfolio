import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


export default function Home() {
    const [loading, setLoading] = useState(true)

    const [testAiResponse, setTestAiResponse] = useState('')
    const [aiTextResponse, setAiTextResponse] = useState<{ [fieldName: string]: string }>({
        name: '',
        description: '',
        languages_used: '',
    })

    const [ai_queries, setAiQueries] = useState<{ [fieldName: string]: string }>({
        name: 'Generate a name for a software development project which would be suitable for the online portfolio of a web software developer',
        languages_used: 'Generate a list of programming languages which can be used for a software developers project'
    })


    function airequestsender() {

        const configuration = new Configuration({
            apiKey: `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`,
        });
        const openai = new OpenAIApi(configuration);

        async function runCompletion() {
            setLoading(true)
            let tempObject: { [fieldName: string]: string } = {}
                try {
                    
                    const completion = await openai.createChatCompletion({
                        model: "gpt-3.5-turbo",
                        messages: [
                         {role:"system", content:"You are a helpful artificial intelligence assistant that is meant for the purpose of generating project ideas and descriptions for the portfolio websites of software developer"},
                         {role: "user", content:'Generate a list of programming languages which can be used for a software developers project' },
                        ],
                        max_tokens: 3000,
                        temperature:1.1
                    });
                    console.log(completion.data.choices[0].message.content!);
                    setTestAiResponse(completion.data.choices[0].message.content!)

                } catch (error) {
                    console.log(error);
                }
            
            setAiTextResponse(tempObject)
            setLoading(false)
        }
        runCompletion()
        console.log(aiTextResponse);
        
    }
  return (
    <div>
        <button onClick={airequestsender} className="bg-black text-white p-4 text-xl">Test API response</button>
        <h1>{testAiResponse}</h1>
    </div>
  )
}


/* 

 $(document).ready(function() {
    $.ajax({
      url: 'https://haveibeenpwned.com/api/v2/breachedaccount/mark@fixitks.co.uk',
      type: 'GET',
      dataType: 'json',
      success: function() { alert('hello!'); },
      error: function() { alert('boo!'); }
      ,
      headers: {
  'User-Agent': 'uaheader'
}
    });
  });
Note to self: you need to become better at naming variables and all that.
*/