// ============================================================
//  TRAVIS THE COACH · Configuración de rutinas
//  Este es el ÚNICO archivo que necesitas tocar para cambiar
//  tus entrenos. Campos de cada ejercicio:
//    nombre        (obligatorio)
//    grupo         (obligatorio) grupo muscular principal
//    series        (opcional)    ej. "4×8-10"
//    peso          (opcional)    peso de referencia, ej. "60-80 kg"
//    indicaciones  (opcional)    tips de técnica
// ============================================================

window.RUTINAS = [
  {
    id: "rutina-1",
    nombre: "Rutina 1 · Empuje / Pierna / Tirón",
    fechaInicio: "2026-09-12", // fecha de la primera sesión (AAAA-MM-DD)
    entrenos: [
      {
        id: "empuje",
        nombre: "Empuje",
        foco: "Pecho, Hombro y Tríceps",
        ejercicios: [
          {
            nombre: "Press inclinado en máquina Technogym",
            grupo: "Pecho superior y hombro",
            indicaciones: "Hombros a 45° del cuerpo."
          },
          {
            nombre: "Press de banca plano con mancuernas",
            grupo: "Pecho"
          },
          {
            nombre: "Press militar con mancuernas sentado",
            grupo: "Hombro anterior"
          },
          {
            nombre: "Elevaciones laterales en polea o con mancuernas",
            grupo: "Hombro medio"
          },
          {
            nombre: "Extensión de tríceps en polea alta con cuerda",
            grupo: "Tríceps"
          }
        ]
      },
      {
        id: "pierna",
        nombre: "Pierna y Core",
        foco: "Pierna completa y Core",
        ejercicios: [
          {
            nombre: "Leg Press Technogym",
            grupo: "Cuádriceps y glúteo",
            series: "4×8-10",
            peso: "60-80 kg",
            indicaciones: "Dominante de rodilla. Pesado."
          },
          {
            nombre: "Hip Thrust con barra",
            grupo: "Glúteo",
            series: "4×8-10",
            peso: "40-50 kg",
            indicaciones: "Dominante de cadera. Pesado."
          },
          {
            nombre: "Peso muerto rumano con mancuernas",
            grupo: "Isquios y glúteo",
            series: "3×10-12",
            peso: "30-40 kg"
          },
          {
            nombre: "Sentadilla búlgara unilateral",
            grupo: "Cuádriceps y glúteo",
            series: "3×10-12 por pierna",
            peso: "8-12 kg por mano"
          },
          {
            nombre: "Extensión de piernas",
            grupo: "Cuádriceps",
            series: "3×12-15",
            indicaciones: "Superserie con el curl femoral."
          },
          {
            nombre: "Curl femoral prone",
            grupo: "Isquios",
            series: "3×12-15",
            indicaciones: "Superserie con la extensión de piernas."
          },
          {
            nombre: "Press Pallof en polea o Plancha",
            grupo: "Core",
            series: "3×30-45 seg"
          },
          {
            nombre: "Abductor",
            grupo: "Glúteo medio"
          }
        ]
      },
      {
        id: "tiron",
        nombre: "Tirón",
        foco: "Espalda, Deltoides posterior y Bíceps",
        ejercicios: [
          {
            nombre: "Jalón al pecho / Lat Pulldown Technogym",
            grupo: "Dorsal y espalda alta"
          },
          {
            nombre: "Remo sentado en polea baja, agarre estrecho",
            grupo: "Espalda media",
            indicaciones: "No levantar los codos."
          },
          {
            nombre: "Remo unilateral con mancuerna",
            grupo: "Dorsal"
          },
          {
            nombre: "Pájaros / Reverse Fly en máquina o poleas",
            grupo: "Hombro posterior"
          },
          {
            nombre: "Curl de bíceps con mancuernas o polea baja",
            grupo: "Bíceps"
          },
          {
            nombre: "Face pull",
            grupo: "Hombro posterior"
          }
        ]
      }
    ]
  }
];
