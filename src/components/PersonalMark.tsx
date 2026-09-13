/** Personal lettering; the reference's RB artwork is not reused. */
export default function PersonalMark({
  signature = false,
}: {
  signature?: boolean;
}) {
  return signature ? (
    <svg
      viewBox="0 0 720 210"
      className="personal-signature"
      aria-hidden="true"
    >
      <text
        x="38"
        y="137"
        textLength="626"
        lengthAdjust="spacingAndGlyphs"
        className="signature-lettering"
        fontSize="142"
      >
        Worachat
      </text>
      <path
        d="M38 189 Q290 141 662 157 Q340 157 116 198 Q319 166 590 166"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 120 120" className="personal-monogram" aria-hidden="true">
      <text x="8" y="71" className="signature-lettering" fontSize="72">
        W
      </text>
      <text x="57" y="83" className="signature-lettering" fontSize="67">
        P
      </text>
      <path
        d="M9 105 Q52 76 109 82 Q65 89 24 113 Q61 91 100 91"
        fill="currentColor"
      />
    </svg>
  );
}
