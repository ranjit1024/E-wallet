export default function(){
    return  <div id="toast-danger" className="absolute bottom-2 right-1 flex items-center w-[35vh] max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 bg-gray-400/80 pl-[12px]" role="alert">
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span className="sr-only">Error icon</span>
    </div>
    <div className="ms-3 text-md font-normal text-red-600">Enter Valid Amount</div>
 
</div>
}