import {Fragment, useState, useEffect, useRef, FC} from 'react';
import cn from 'classnames';

type AudioPlayerProps = {
  isPlaying: boolean;
  src: string;
  onPlayButtonClick: () => void;
}

const AudioPlayer: FC<AudioPlayerProps> = ({isPlaying, src, onPlayButtonClick}) => {

  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let isAudioPlayerMounted = true;

    if (audioRef.current === null) {
      return;
    }

    audioRef.current.addEventListener('loadeddata', () => {
      if (isAudioPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      audioRef.current.play();
      return;
    }

    audioRef.current.pause();

    return () => {
      isAudioPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <Fragment>
      <button
        className={cn(
          'track__button',
          {'track__button--play': !isPlaying},
          {'track__button--pause': isPlaying}
        )}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef} />
      </div>
    </Fragment>
  );
}

export default AudioPlayer;
