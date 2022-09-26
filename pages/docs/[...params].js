import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>
          THIS IS DOCUMENT PAGE for {params[0]} to {params[1]}
        </h1>
      </div>
    );
  }
  if (params.length === 1) {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>
          THIS IS DOCUMENT PAGE for {params[0]}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>
          THIS IS DOCUMENT PAGE
        </h1>
      </div>
    );
  }
};

export default Doc;
