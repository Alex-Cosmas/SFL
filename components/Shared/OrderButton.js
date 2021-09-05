import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function OrderButton({ buttonState, action }) {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          if (action == "complete") {
            router.push("/order/confirm");
          }

          if (action == "confirm") {
            Swal.fire({
              title: "Success!",
              text: `Confirmed 👍`,
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        }}
        className="w-full px-4 py-4 mt-3 font-bold rounded shadow bg-secondary text-beige hover:text-secondary hover:bg-primary"
      >
        {buttonState}
      </button>
    </>
  );
}
