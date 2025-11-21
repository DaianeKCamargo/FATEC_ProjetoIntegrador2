import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function InfoIcon({ text }: { text: string }) {
  const [show, setShow] = useState(false);

  return (
    <span style={{ position: "relative", display: "inline-block", marginLeft: 6 }}>
      <AiOutlineInfoCircle
        size={18}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ color: "#0d6efd", cursor: "pointer" }}
      />

      {show && (
        <span
          style={{
            position: "absolute",
            top: "120%",
            left: "0",
            background: "#000",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: 6,
            fontSize: 12,
            whiteSpace: "nowrap",
            zIndex: 10
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
}