import * as React from "react"
import triganeye from "../images/trigan eye.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout>
    <SEO title="Contact Mauricio" />
<>
      <div class="flex items-center flex-no-shrink text-white pt-3 justify-center">
            <img src={triganeye} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img>
      </div>
      <div class="flex items-center text-white justify-center pt-3">
            <h2 class="text-white">CONTACT ME</h2>
      </div>
      {/* <div>
        <h4 class="flex items-center flex-no-shrink text-white pt-3 justify-center">Inquiries</h4>
        <h5 class="flex items-center flex-no-shrink text-white pt-3 justify-center">Email: triganvisuals@gmail.com</h5>
      </div> */}

<div class="flex justify-center">
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" for="grid-password">
            Full Name
          </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" for="grid-password">
            E-mail
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" for="grid-password">
            Message
          </label>
          <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-red-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="md:w-133">
          <button class="shadow bg-red-700 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Send
          </button>
        </div>
      <div class="md:w-3/3"></div>
      </div>
    </form>
  </div>
</>     

  </Layout>
)

export default ContactMe
