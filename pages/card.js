import { Card } from 'carbon-addons-iot-react';

const meow = () => {
  return (
    <div >
      <Card
        CARD_SIZES={{
          LARGEWIDE: {
            lg: {
              h: 4,

              w: 16,
            },

            max: {
              h: 4,

              w: 16,
            },

            md: {
              h: 4,

              w: 8,
            },

            sm: {
              h: 4,

              w: 4,
            },

            xl: {
              h: 4,

              w: 16,
            },

            xs: {
              h: 4,

              w: 4,
            },
          },
        }}
        size="LARGEWIDE"
        hideHeader={true}
        title="GeneOS Card"
      ></Card>
    </div>
  );
};

export default meow;
