import { useRouter } from "next/router";

function TableLink({ name, link }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === link ? "red" : "black",
  };

  const route = (e) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <a href={link} onClick={route} style={style}>
      {name}
    </a>
  );
}

export default TableLink;
