import React from 'react'

const terms = [
    {headline: "1. Contact information",
     text: "For any inquiries or concerns regarding the Website and/or App, you can reach us through the following contact methods:",
     li1: "Email: support@pass-protect.com",
     li2: "Contact page: www.yourwebsite.com",
    },
    {headline: "2. Online payments",
     text: "The Website and/or App accept online payments for the services offered. By providing your payment information, you authorize us to charge the specified amount for the selected services.",
    },
    {headline: "3. Refunds and Billing",
     text: "We do not provide refunds for the services offered through the Website and/or App. Additionally, if you sign up for a free trial, please note that you will be automatically billed for the selected services unless you cancel before the end of the trial period.",
    },
    {headline: "4. Modifications to Terms",
     text: "We reserve the right to modify these Terms at any time without prior notice. It is your responsibility to review the Terms periodically for any updates or changes. By continuing to use the Website and/or App after any modifications to the Terms, you agree to be bound by the revised Terms.",
    },
    {headline: "5. Disclaimer of Warranties",
     text: "The Website and/or App are provided on an as-is and  as available basis. We make no warranties or representations of any kind, express or implied, regarding the operation, availability, or accuracy of the Website and/or App.",
    },
    {headline: "6. Limitation of Liability",
     text: "To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Website and/or App.",
    },
    {headline: "7. Governing Law and Jurisdiction",
     text: "These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada. Any legal actions or proceedings arising out of or relating to these Terms shall be exclusively brought in the courts located in Ontario, Canada.",
    },
]

const page = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col border border-black rounded-lg overflow-y-scroll items-center py-6 h-[830px] md:w-[70%]'>
        <div className='flex flex-col items-center justify-center px-10 md:px-20'>
            <h1 className='text-center text-3xl text-neutral-800'>Terms of service</h1>
            <p className='text-balance text-neutral-800 mt-4'>
              These terms of Service ("Terms") govern your use of the Pass Protect website, www.yourwebsite.com ("Website") and the Pass Protect mobile application ("App"). By accessing or using the Website and/or App, you agree to be bound by these Terms.
              If you do not agree with any part of these Terms, you may not access or use the Website and/or App.
            </p>
        </div>
        <div className='px-10 md:px-20'>
            {
                terms.map((term, index) => (
                    <div key={index}>
                        <h2 className='text-xl text-neutral-800 mt-4 font-bold'>{term.headline}</h2>
                        <p className='text-balance text-neutral-800 mt-4 text-lg'>{term.text}</p>
                        {(term.li1 || term.li2) && (
                          <ul className="list-disc list-inside text-balance text-lg text-neutral-800 mt-4">
                            {term.li1 && <li>{term.li1}</li>}
                            {term.li2 && <li>{term.li2}</li>}
                          </ul>
                        )}
                    </div>
                ))
            }
        </div>
        <div className='px-10 md:px-20'>
            <h1 className='text-center text-3xl my-4'>Privacy policy</h1>
            <p className='text-neutral-800 text-xl'>
             Apart from the data you directly give us (such as your email address), 
             we do not collect any of your data or sell it to third parties.
            </p>
        </div>
      </div>
    </div>
  )
}

export default page
