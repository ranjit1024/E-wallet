export const Skeleton = () => {
    return (
      <>
        <div className="h-[100vh] bg-white">
          <div className="grid grid-cols-[20%,80%]">
            <div className="relative mr-1">
              <div className="h-16 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
              <div className="mt-8 p-2 h-[80vh] bg-gray-200 animate-pulse rounded-lg">
                <ul>
                  <li className="h-12 bg-gray-300 animate-pulse rounded-lg mb-2"></li>
                  <li className="h-12 bg-gray-300 animate-pulse rounded-lg mb-2"></li>
                  <li className="h-12 bg-gray-300 animate-pulse rounded-lg mb-2"></li>
                  <li className="h-12 bg-gray-300 animate-pulse rounded-lg mb-2"></li>
                  <li className="h-12 bg-gray-300 animate-pulse rounded-lg mb-2"></li>
                </ul>
              </div>
            </div>
            <div className="h-full bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </>
    );
  };
