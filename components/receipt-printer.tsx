"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./receipt-printer.module.css";

type ReceiptPrinterProps = {
  company?: string;
  name: string;
  budget?: string;
  stage: "printing" | "complete";
};

const printSteps = [
  "-100%",
  "-88%",
  "-88%",
  "-73%",
  "-73%",
  "-56%",
  "-56%",
  "-37%",
  "-37%",
  "-18%",
  "-18%",
  "0%",
];

const printTimes = [0, 0.09, 0.14, 0.23, 0.28, 0.38, 0.43, 0.55, 0.6, 0.73, 0.78, 1];

export function ReceiptPrinter({ company, name, budget, stage }: ReceiptPrinterProps) {
  const reduceMotion = useReducedMotion();
  const isComplete = stage === "complete";

  return (
    <section aria-label="Estado de tu solicitud" className={styles.printer}>
      <div className={styles.machine}>
        <div className={styles.topRow}>
          <span>WEB7 / REQUEST</span>
          <span className={isComplete ? styles.complete : styles.printing}>
            {isComplete ? <CheckCircle2 aria-hidden="true" size={15} /> : <LoaderCircle aria-hidden="true" size={15} />}
            {isComplete ? "LISTO" : "IMPRIMIENDO"}
          </span>
        </div>

        <div className={styles.screen} role="status" aria-live="polite">
          {isComplete ? "Solicitud recibida" : "Preparando tu proyecto…"}
        </div>
        <div aria-hidden="true" className={styles.slot} />
      </div>

      <div className={styles.output}>
        <motion.article
          animate={{ y: stage === "printing" && !reduceMotion ? printSteps : "0%" }}
          className={styles.receipt}
          initial={reduceMotion ? false : { y: "-100%" }}
          transition={{
            duration: reduceMotion ? 0 : 1.45,
            ease: "linear",
            times: reduceMotion ? undefined : printTimes,
          }}
        >
          <p className={styles.brand}>WEB7</p>
          <p className={styles.title}>RECIBO DE SOLICITUD</p>
          <div className={styles.rule} />
          <dl className={styles.details}>
            <div><dt>CLIENTE</dt><dd>{name}</dd></div>
            {company ? <div><dt>EMPRESA</dt><dd>{company}</dd></div> : null}
            <div><dt>PROYECTO</dt><dd>Nuevo sitio web</dd></div>
            {budget ? <div><dt>INVERSIÓN</dt><dd>{budget}</dd></div> : null}
          </dl>
          <div className={styles.rule} />
          <p className={styles.message}>Hemos recibido tu idea. Te responderemos en 1–2 días laborables.</p>
          <p className={styles.stamp}>REQUEST RECEIVED</p>
        </motion.article>
      </div>
    </section>
  );
}
