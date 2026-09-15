import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* =========================================
          LEFT IMAGE
          ========================================= */}
      <div className="hero-left-image">
        <Image
          src="/images/img1.webp"
          alt="Family walking together on the beach"
          fill
          priority
          sizes="35vw"
          className="hero-image"
        />
      </div>


      {/* =========================================
          CENTER CONTENT
          ========================================= */}
      <div className="hero-content">

        <p className="hero-eyebrow">
          ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY
          <br />
          PARK &amp; ACROSS CA
        </p>


        <h1 className="hero-title">
          Rebuild your foundation on
          <br />

          solid ground and finally
          <br />

          begin to{" "}
          <span className="hero-script">
            thrive
          </span>
          .
        </h1>


        <p className="hero-description">
          Specialized therapy for adults, couples, teens, and
          children to reflect, heal, and grow.
        </p>


        <Link
          href="#contact"
          className="hero-appointment"
        >
          BOOK AN APPOINTMENT

          <span className="appointment-arrow">
            →
          </span>
        </Link>

      </div>


      {/* =========================================
          RIGHT IMAGE
          ========================================= */}
      <div className="hero-right-image">
        <Image
          src="/images/img2.webp"
          alt=""
          fill
          sizes="8vw"
          className="hero-right-image-content"
        />
      </div>

    </section>
  );
}