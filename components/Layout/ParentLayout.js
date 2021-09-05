import Header from "~/components/Shared/Header";

export default function ParentLayout({ children }) {
  // console.log(children, "kwa layout");
  return (
    <>
      <div className="container mx-auto">
        <Header cart={children.props.current} />
      </div>

      <div className=""> {children}</div>
    </>
  );
}
