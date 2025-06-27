import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="flex flex-col items-center bg-gray-100 h-[84vh]">
            <div className="w-full bg-blue-500 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-lg">We'd love to hear from you!</p>
            </div>
            <div className="w-full max-w-4xl p-6">
                <h2 className="text-2xl font-semibold mt-6">Get in Touch</h2>
                <p className="mt-2 text-gray-700">
                    For any inquiries, feedback, or support, please reach out to us at:
                </p>
                <p className="mt-2 text-blue-500">
                    <pre><a href="mailto:ashapumohan123@gmail.com"><i class="fa-solid fa-envelope"></i> Mail to <i class="fa-solid fa-arrow-right"></i></a></pre>
                </p>
                <p className="mt-2 text-gray-700">
                    You can also contact us through our social media channels:
                </p>
                <ul className="mt-2 list-disc pl-6">
                    <li>
                        <pre><a href="https://www.facebook.com/profile.php?id=100084252888068" className="text-blue-500"><i class="fa-brands fa-facebook-f"></i>  Facebook <i class="fa-solid fa-arrow-right"></i></a></pre>
                    </li>
                    <li>
                        <pre><a href="https://x.com/MohanAshapu" className="text-blue-500"><i class="fa-brands fa-twitter"></i> Twitter <i class="fa-solid fa-arrow-right"></i></a></pre>
                    </li>
                    <li>
                        <pre><a href="https://www.instagram.com/mr_mohan__7781/" className="text-blue-500"><i class="fa-brands fa-instagram"></i> Instagram <i class="fa-solid fa-arrow-right"></i></a></pre>
                    </li>
                </ul>
                <p className="mt-2 text-gray-700">
                    We value your feedback and will get back to you as soon as possible.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact