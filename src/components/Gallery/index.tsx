import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";

export const Gallery = () => {
  return (
    <section className="container mb-10">
      <div className="grid grid-cols-2 gap-2.5 lg:gap-7.5 [grid-template-rows:repeat(5,auto)] [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple'] lg:grid-cols-4 lg:[grid-template-rows:repeat(3,300px)] lg:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']">
        <div className="[grid-area:highlight] relative min-h-[300px] overflow-hidden rounded-[20px] lg:min-h-0">
          <img
            src={galeriaHomem}
            alt="Modelo masculino com moletom preto e tênis SyntaxWear"
            className="absolute h-full w-full object-cover"
          />

          <Overlay
            title="Krypton One"
            subtitle="Estilo urbano com atitude"
            className="inset-0 justify-center"
          >
            <Button variant="secondary" size="sm">
              Feminino
            </Button>
            <Button variant="secondary" size="sm">
              Masculino
            </Button>
          </Overlay>
        </div>

        <div className="[grid-area:sneaker-purple] h-47.5 lg:h-auto overflow-hidden rounded-[20px] lg:min-h-0">
          <img
            src={galeriaTenisRoxo}
            alt="Tênis roxo com cadarços verdes"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="[grid-area:model] min-h-92.75 overflow-hidden rounded-[20px] lg:min-h-0 gap-2.5">
          <img
            src={galeriaModelo}
            alt="Modelo feminina com camisa listrada e tênis colorido"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="[grid-area:sneaker-color] min-h-[180.5px] overflow-hidden rounded-[20px] lg:min-h-0">
          <img
            src={galeriaTenisColorido}
            alt="Tênis colorido roxo, laranja e turquesa"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="[grid-area:sneaker-white] h-47.5 lg:h-auto overflow-hidden rounded-[20px] lg:min-h-10">
          <img
            src={galeriaTenisBrancoEPreto}
            alt="Tênis preto e branco com sola azul"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="[grid-area:sneaker-silver] min-h-[180.5px] overflow-hidden rounded-[20px] lg:min-h-0">
          <img
            src={galeriaTenisCinza}
            alt="Tênis cinza prateado"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
