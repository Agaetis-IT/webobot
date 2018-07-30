import axios from 'axios'

const baseURL = 'http://mediobot.monobot.fr'

// export const getPictureUrl = id => `${baseURL}/picture/image/${id}`
export const getPictureUrl = id =>
  'https://files.slack.com/files-pri/T02FTPNKB-FBXFJ4341/monobloc2.jpg'

const instance = axios.create({
  baseURL,
})

// instance.get('/picture/detection/processed')
export const fetchPictures = () =>
  Promise.resolve({
    data: [
      {
        author: 'Make My Chairs',
        detectionError: '',
        detections: [
          {
            box: {
              bottomRightX: 0.4585524797439575,
              bottomRightY: 0.801934003829956,
              topLeftX: 0.2657819390296936,
              topLeftY: 0.6072362661361694,
            },
            label: 'monobloc chair',
            score: 0.9549205303192139,
          },
          {
            box: {
              bottomRightX: 0.7442636489868164,
              bottomRightY: 0.9376047253608704,
              topLeftX: 0.6886305809020996,
              topLeftY: 0.8841329216957092,
            },
            label: 'monobloc chair',
            score: 0.012327678501605988,
          },
          {
            box: {
              bottomRightX: 0.04855723679065704,
              bottomRightY: 0.9923867583274841,
              topLeftX: 0.007044794037938118,
              topLeftY: 0.967297375202179,
            },
            label: 'monobloc chair',
            score: 0.0014875073684379458,
          },
        ],
        id: '5b55ce8db9eddc0005d147aa',
        origin: 'FLICKR',
        path: '/monobloc2.jpg',
        url: 'https://farm1.staticflickr.com/833/41696875270_4f2a3c3861.jpg',
      },
    ],
  })
