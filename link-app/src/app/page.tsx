import './style/home.css'

export default function Home() {
  return (
    <>
      <div className='content'>
        <div className='slider-x'>
          <div>
            <iframe src="https://tabelog.com/" width="100%" height="100%" is='x-frame-bypass'></iframe>
          </div>
          <div>
            <iframe src="https://www.hotpepper.jp/" width="100%" height="100%" is='x-frame-bypass'></iframe>
          </div>
          <div>
            <iframe src="https://retty.me/" width="100%" height="100%" is='x-frame-bypass'></iframe>
          </div>
          <div>
            <iframe src="https://restaurant.ikyu.com/" width="100%" height="100%" is='x-frame-bypass'></iframe>
          </div>
          <div>
            <iframe src="https://www.gnavi.co.jp/" width="100%" height="100%" is='x-frame-bypass'></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
