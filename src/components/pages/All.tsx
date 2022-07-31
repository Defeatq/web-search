type Results = {
  results?: Result[];
};

type Props = {
  results: Results | null | undefined,
};

interface Result {
  title: string,
  link: string,
  description: string,
};

function All(props: Props) {
  const results = props.results;
  const resultsArray = results?.results;

  return (
    <div className="sm:px-24 md:px-36 lg:px-56">
      <div className="flex flex-wrap justify-between items-start gap-y-6">
        {
          resultsArray?.map((result, index) => 
            <a key={ index } href={ result.link } className="flex flex-col md:w-2/5 w-full">
              <p className="break-words dark:text-gray-200 text-gray-900">
                { result.link }
              </p>
              <p className="break-words text-xl dark:text-blue-300 text-blue-600 hover:underline">
                { result.title }
              </p>
            </a>
          )
        }
      </div>
    </div>
  )
}

export default All;
