import { Link } from "react-router-dom"
import Title from "../../components/Title"
import { AiOutlineFilePdf, AiTwotoneFilePdf } from "react-icons/ai"

const Notice = () => {
  return (
    <div className="mt-10 border-4 drop-shadow-md px-10 py-5">
      <Title title="Notice/NOC" />

      <div className="mt-5 flex gap-5">
        <button className="btn btn-primary rounded-full"> <AiOutlineFilePdf size={26} /> Notice</button>
        <button className="btn btn-outline rounded-full px-7 hover:bg-blue-500"> <AiTwotoneFilePdf size={26} /> NOC</button>

      </div>
      <div className="my-5">
        <div className="container mx-auto mt-10">
          <table className="min-w-full">
            <thead>
              <tr className="border-4 border-t-4 border-t-violet-950">
                <th className="w-4/5 px-6 py-3 bg-gray-200 text-left">Notice</th>
                <th className="w-1/5 px-6 py-3 bg-gray-200 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="border-2">
                <td className="w-4/5 px-6 py-4">
                  ডিগ্রি পাস ও সার্টিফিকেট কোর্স ১ম বর্ষ পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের ২য় বর্ষে...</td>
                <td className="w-1/5 px-6 py-4">20-12-2022</td>
              </tr>
              <tr className="border-2">
                <td className="w-4/5 px-6 py-4">
                  ডিগ্রি পাস ও সার্টিফিকেট কোর্স ১ম বর্ষ পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের ২য় বর্ষে...</td>
                <td className="w-1/5 px-6 py-4">20-12-2022</td>
              </tr>
              <tr className="border-2">
                <td className="w-4/5 px-6 py-4">
                  ডিগ্রি পাস ও সার্টিফিকেট কোর্স ১ম বর্ষ পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের ২য় বর্ষে...</td>
                <td className="w-1/5 px-6 py-4">20-12-2022</td>
              </tr>
              <tr className="border-2">
                <td className="w-4/5 px-6 py-4">
                  ডিগ্রি পাস ও সার্টিফিকেট কোর্স ১ম বর্ষ পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের ২য় বর্ষে...</td>
                <td className="w-1/5 px-6 py-4">20-12-2022</td>
              </tr>
              <tr className="border-2">
                <td className="w-4/5 px-6 py-4">
                  ডিগ্রি পাস ও সার্টিফিকেট কোর্স ১ম বর্ষ পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের ২য় বর্ষে...</td>
                <td className="w-1/5 px-6 py-4">20-12-2022</td>
              </tr>
           
             
              
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
        <span className="pt-5"><Link className="m-5 font-semibold text-md cursor-pointer text-blue-500" to="/notice">All Notice</Link></span>


    </div>
  )
}

export default Notice