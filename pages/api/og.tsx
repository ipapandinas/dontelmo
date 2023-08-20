/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(
  new URL('../../public/fonts/PressStart2P-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

const OgImage = async () => {
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          fontSize: 128,
          backgroundColor: '#FFF',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <img
            alt="DON TELMO's avatar"
            height={160}
            width={160}
            src="https://dontelmo.xyz/assets/svgs/alien.svg"
            title="DON TELMO's avatar"
          />
        </div>
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              fontFamily: '"PressStart2P"',
              color: 'black',
              marginTop: 56,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            DON TELMO
          </div>
          <div
            style={{
              fontSize: 24,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              fontFamily: '"PressStart2P"',
              color: 'black',
              marginTop: 24,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            WEB INVASION EXP.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundSize: '100% 2px, 3px 100%',
            // background:
            //   'linear-gradient(rgba(18, 16, 16, 0) 75%, rgba(0, 0, 0, 0.2) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'PressStart2P',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}

export default OgImage
