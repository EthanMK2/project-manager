interface titleProps {
  title: string
}

const PageTitle = ({ title }: titleProps) => {
  return <><h1 className="w-full text-center font-bold text-4xl lg:my-4">{title} </h1><hr /></>
}

export default PageTitle;