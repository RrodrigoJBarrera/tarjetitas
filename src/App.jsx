import logo from './assets/logo.svg';
import personajes from './assets/personajes.png';
import React from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
} from '@material-tailwind/react';

const App = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div>
          <img className='-my-[50px]' src={logo} alt='' />
        </div>
        <div>
          <p>¡Hazlo digital, hazlo especial!</p>
        </div>
        <DefaultGallery></DefaultGallery>
        <div className='flex flex-col items-center space-y-6 pb-2 h-screen justify-center bg-purple-50 w-full '>
          <img className='h-64' src={personajes} alt='' />
          <p>¿Queres tu tematica preferida?</p>
          <a href='https://wa.me/543513200517/' target='_blank'>
            <Button color='black'>
              <span>Escribinos! </span>
            </Button>
          </a>
        </div>
        <SimpleFooter></SimpleFooter>
      </div>
    </>
  );
};

function DefaultGallery() {
  const data = [
    {
      id: '001',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424721347_122125874828129007_6031638701833359418_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEUvyI7vrzI-KEpAmr_B-1IRK9voRPiGJ9Er2-hE-IYnzy2KtGgsTF_rqBT759GnBC2u0z32EGfWGj0SE_Qq3pr&_nc_ohc=xAh5nJggI0cAX-v64ST&_nc_ht=scontent.fcor3-1.fna&oh=00_AfDgesVGJ5lQpAN7sqNWcsaqXnfGDfO93Djnc2aJ_FiJPg&oe=65BDB3BA',
    },
    {
      id: '002',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424805170_122125873838129007_5451378724308575648_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEgq2FAvnpqGojIgsVmsXJmQzWmI3nx3HxDNaYjefHcfC9Q3ZUJiBJgpbn67nRlyDuplTk8Ihz5K-dQ6ZY039li&_nc_ohc=VA3IVpCMLhIAX_ym8fB&_nc_ht=scontent.fcor3-1.fna&oh=00_AfDlmJEKnTHgQI1ars3DEvXvi_orSRpD8j2B_oMZvU0_og&oe=65BEBA53',
    },
    {
      id: '003',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424773702_122125873784129007_1420605982728031882_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeExcC95kgrfRB57PHSDNO--kFtQSka7FEKQW1BKRrsUQhMUXp0iZaKndNGCb6x0FGAP3x2neAgGWc3DBaeGCfVP&_nc_ohc=YqL3_EPXewUAX9sUvS2&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAp002Udl69vfYklMI4rTxDhDPHXMYpIT0BiXT9ZU2T0g&oe=65BF1102',
    },
    {
      id: '004',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424708720_122125873622129007_3468142399426978626_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeE4NeBWpn82002CiwS0jzanNwaDR2mxv3k3BoNHabG_eZ1TgRR3ZwQdMXijfCiwNlAWWw-HIhcwE7wTCKro1Gwr&_nc_ohc=ZGrcbH7nXPUAX8ZVuw7&_nc_ht=scontent.fcor3-1.fna&oh=00_AfCbpOPXFoyYCQs8fA33iqUfWPY6LUV4KzGgZWewiyJhRg&oe=65BE0302',
    },
    {
      id: '005',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424887967_122125873544129007_6501369721998035713_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEoE0IFeeE5J-SKOXa3kBIU9-HqX0wkjln34epfTCSOWU7g6Kq8c1ZJzyLKj9UyG2dhrcoHDdWvrq90ZqHxjpJl&_nc_ohc=Q2OIYDzT8E8AX99Q9N1&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAJVxKj0iLnvNTMNLjrzZ-C6bo_ZjDuR9haNhPj_lfgJA&oe=65BE1CDE',
    },
    {
      id: '006',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424560893_122125873460129007_4511532237284859082_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGvDWWfMSntuO2WRR_AoRqJB_ChZc0RWCwH8KFlzRFYLELZ-L0ECpjNM4E-yyS9b9jYEa0v7BAta8q5zegqXIO4&_nc_ohc=i0Vq-wSmRJ0AX-nopbQ&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAIG5i1Afbvtffaf__cgwd_23FZsWSS1InVTWJXl3j9wg&oe=65BDAE90',
    },
    {
      id: '007',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424705838_122125873388129007_5214057884873535422_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGWE6WhgDNtsBFppdUhzykzm3AqC19eDdKbcCoLX14N0u5X3EsjjqVUYAbzTHpiwhGvovfHRDuxuxp25K4nPLag&_nc_ohc=jJhSgeOpD3sAX9JWAuj&_nc_ht=scontent.fcor3-1.fna&oh=00_AfA5RgdJyVMASLTuNZyGwsAsRBtZfZODay1RZWg-g8TOTw&oe=65BDFDF4',
    },
    {
      id: '008',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424576625_122125873334129007_8261932744181968125_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFIVLckK26QHaOjrRduXteWE4YEvd8s1REThgS93yzVEamyrcraTTSb6gmYWHYsPv0FvCuu_A0dcaaYyot3Kon1&_nc_ohc=R31SJ2W6vAcAX85YJBe&_nc_ht=scontent.fcor3-1.fna&oh=00_AfARghXjqLSE8PZIjCyVCtoj1MA1EdtKz7unR48PQ_8OlA&oe=65BF1C72',
    },
    {
      id: '009',
      precio: 'aqui',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424569171_122125873286129007_5879698590869949979_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeE0q8z836TC4Vq82gp-H0XiptZPO7ZvA-ym1k87tm8D7NWwfGSRgbFEwSIPwyInnvDcoip8O8jvCUs4bw2lFdEQ&_nc_ohc=tMibyGvYArcAX80ksbj&_nc_ht=scontent.fcor3-1.fna&oh=00_AfCzjHTSYuIZ2j02TVkqBhwo60Bh6-Gt-Bnr6F0xq1fM9g&oe=65BDB9EA',
    },
    {
      id: '010',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424714401_122125873232129007_7472684546357827022_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHw-diINHDcwWAudHD9jbPRy9qQ62wyAyXL2pDrbDIDJeslM5ZC6BA3TNTsNRVAolpGZ13NSWmYWiiliCIRRDRc&_nc_ohc=kufDfJK_DDAAX_7nKZI&_nc_ht=scontent.fcor3-1.fna&oh=00_AfB77GOzXJWb2BFcsf78dT9rzR9877Z3L03N5DoG1vGSgQ&oe=65BD538D',
    },
    {
      id: '011',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424669179_122125873190129007_1246568785570636650_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGHuHe-4ALH0X1VEwZiegKX-Ex4iT9SCRD4THiJP1IJEOX6ucS4sPluFLpKeh0MLE783EN7ztRVg1kemjSlmnY6&_nc_ohc=C4N2fICCzPYAX-X67SU&_nc_ht=scontent.fcor3-1.fna&oh=00_AfD91Chxwhh7YYFVKjtGjSTpw8Nafs1qqlmypi6Lx8qBAQ&oe=65BD67F4',
    },
    {
      id: '012',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424576851_122125873118129007_5716065815608602647_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFOh_nCvMUXyCdyd1Jrz1z3tx8Az09LmsO3HwDPT0uaw8-d1VBNN1StNSJDG30oZV6ymRJPgfkzXKAqNCX5-qwd&_nc_ohc=5ImWIjUS1w8AX8tTc4i&_nc_ht=scontent.fcor3-1.fna&oh=00_AfCuTrtgzEGhuP3kANeX_nU0HvKE6bm6BGi-z7_5MlbqPw&oe=65BDE043',
    },
    {
      id: '013',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424708634_122125873064129007_1359366301221658025_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHklEa57D8DZ24HmMd38K--OIdH0sjytxo4h0fSyPK3GrqQW_y5Srk3-eoEzrMO2UjYj-6yNok4OjHD1bE_Nqzk&_nc_ohc=jpF7FN9OfToAX_sFkHR&_nc_ht=scontent.fcor3-1.fna&oh=00_AfD7EQGrufyUL_o0Ge5xWWcbGBtAkZNUTtGGf8gYwk1gVw&oe=65BE15B0',
    },
    {
      id: '014',
      precio: '',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424576210_122125873016129007_3190652679932726124_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEKvtrvHg-1QfGjaEdbbFY_QS8Jp5NFO45BLwmnk0U7joFYjroNDl_eCRGPoaK2HZUpBroUw4oOyUNRo49Nks7U&_nc_ohc=PhzHT7M7QlgAX-n7cnB&_nc_ht=scontent.fcor3-1.fna&oh=00_AfDqrtFaLRbvcjGcmEtPTS14KkZtz5RjN4MdIsjsXA72uA&oe=65BDF260',
    },
    {
      id: '015',
      precio: 'a',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424748438_122125872902129007_4754909386977176049_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFyBmBsD3phy1B8hA3dekdTm1bQj9CmUNGbVtCP0KZQ0RWPabupRjxUHSrCrGoVksPKHpUHHIdxg9CRM6lDLdz5&_nc_ohc=1Mt9mMwps8EAX87rZEG&_nc_ht=scontent.fcor3-1.fna&oh=00_AfBGS4UCyXUHP8S59SVSxkOEQLupv8svrdOTVm0cj93iRw&oe=65BD4511',
    },
    {
      id: '016',
      precio: 'a',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424529432_122125872836129007_5260940208924385864_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFVzSr69JxHovL5L_V2wm1EVQEzfRioYtRVATN9GKhi1E6_RcRwyR9IHyPYCS4zBaRWZZX0Dnq7PQLQpYl7Vanb&_nc_ohc=c2WNbOUvR-oAX9tfsNT&_nc_ht=scontent.fcor3-1.fna&oh=00_AfBqLFz16McVLxK9eB3k8Q_2uLUviiCBbC7o88Hz1wyL9Q&oe=65BE6266',
    },
    {
      id: '017',
      precio: 'a',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424543833_122125872632129007_4310070306235618752_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeF7xS6HtrN2DgAxqVw1tygQK7kzCIc7bFgruTMIhztsWLVJmTa59owhZLvI2DiDS7esNP28tYuCwWCLouphvhPm&_nc_ohc=sIMXZFTQc3UAX8pKowZ&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAoZJegCjpsEXDZ9gN-lcdmoBmcMWstGUKWTudm3Pvk6A&oe=65BEDD90',
    },
    {
      id: '018',
      precio: 'a',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424585248_122125872548129007_3796472495895941732_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEGKshyOMAVu62idqU7dD1LGfQRnJc87IwZ9BGclzzsjPVUthrUwSFhQZwCthwiHbrxUMr21c0qk024kb5tqdGA&_nc_ohc=XvbNr76kif0AX-7lUiF&_nc_oc=AQmU2yMevFPIfLVmcnPTn-3dV7mBQ_d6KcAnL0T7kBR1AwpvanKNWSofMWsf2MOP0TQ&_nc_ht=scontent.fcor3-1.fna&oh=00_AfBbYciRiWwKjM7cKuVVdU_S6Q-iGlVFvUbHcYwYqrbiuA&oe=65BEBA66',
    },
    {
      id: '019',
      precio: 'a',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424578576_122125872542129007_2385136846977587478_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeH4092z1MIivpneX4V7FhNzYLtML91YlvNgu0wv3ViW82kBXXtNUCj4pr4-iGYN38gRZfVG9HLiYAfvjup1xCeW&_nc_ohc=aorHezFRBjMAX_Ql8sX&_nc_ht=scontent.fcor3-1.fna&oh=00_AfBHrNmWVMloFp73PtDwEpID9TXrsIm5e3fFADdtJBC8Ew&oe=65BD37AC',
    },
    {
      id: '020',
      precio: 'a',

      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424576210_122125872764129007_7289473140900439065_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGPnYxdmXmKXhobwySreeQgL8GvStw-uRIvwa9K3D65Ekxppyyc_8QYHNtDtwP_o1sxHaA4V7QFeLJjpxmGgR0R&_nc_ohc=sM-zs8b3xxcAX_FVw_7&_nc_ht=scontent.fcor3-1.fna&oh=00_AfB2Veqp3LwNNeCfm84jyRmr0VDlMEsmFDXAWI46pcOB-w&oe=65BE1AA6',
    },
    {
      id: '021',
      precio: 'a',
      imageLink:
        'https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/424707420_122125872704129007_6122761417826763772_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHMcsubyAFQeB4GHvq2bUSXDE9f8Sjk8KMMT1_xKOTwo-r86-9x-_v7KleBkYcPhYXTM0JLKBglKadJf5icB4AC&_nc_ohc=M2PxHHj7E0UAX95yTpp&_nc_ht=scontent.fcor3-1.fna&oh=00_AfADMtnDdYmd3rVlh-sTF-Ylcrki9EiGVR_8UAeqXMN0OQ&oe=65BEDFCF',
    },
  ];

  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 p-8'>
      {data.map(({ imageLink, id }, index) => (
        <div key={index} className='text-center px-2'>
          <DialogWithImage img={imageLink} codigoTarjeta={id}></DialogWithImage>
        </div>
      ))}
    </div>
  );
}

function DialogWithImage({ img, codigoTarjeta }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card
        className='h-64 w-[12rem] max-w-full rounded-lg object-cover object-center hover:scale-95 shadow-lg hover:ring-2 hover:ring-purple-500 cursor-pointer overflow-hidden transition-all hover:opacity-90'
        onClick={handleOpen}
      >
        <img className='h-full w-full object-cover object-center' src={img} />
      </Card>
      <DialogDefault
        open={open}
        handleOpen={handleOpen}
        img={img}
        codigoTarjeta={codigoTarjeta}
      ></DialogDefault>
    </>
  );
}

function DialogDefault({ open, handleOpen, img, codigoTarjeta }) {
  return (
    <Dialog
      className='flex flex-col items-center justify-center max-h-full max-w-96 overflow-scroll'
      open={open}
      handler={handleOpen}
    >
      <DialogBody className='max-w-96 flex flex-col items-center justify-center'>
        <img className='w-full h-96' src={img} alt='' />
        <p className='font-bold pt-2 text-start w-full'>$1500</p>
        <p className='w-full text-justify'>
          Personalizala con: Tu nombre, una foto(opcional), fecha, horario y
          lugar.
        </p>
      </DialogBody>
      <DialogFooter className='max-w-96'>
        <Button
          variant='text'
          color='red'
          onClick={handleOpen}
          className='mr-1'
        >
          <span>Cerrar</span>
        </Button>
        <a
          href={`https://wa.me/543513200517/?text=Hola estoy interasado/a en solicitar este modelo de tarjeta. Tarjeta Codigo: [${codigoTarjeta}]`}
          target='_blank'
        >
          <Button color='green' onClick={handleOpen}>
            <span>Solicitar</span>
          </Button>
        </a>
      </DialogFooter>
    </Dialog>
  );
}

function SimpleFooter() {
  return (
    <footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t py-10 text-center  bg-purple-500'>
      <Typography color='white' className='font-normal'>
        &copy; 2024 Rodrigo Barrera
      </Typography>
    </footer>
  );
}

export default App;
