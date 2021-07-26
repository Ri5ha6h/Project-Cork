import React from 'react';
import { FC, memo } from 'react';

interface Props {
  theme?: 'normal' | 'indicator';
  shape?: 'circle' | 'square';
  image?: string;
  initials?: string;
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  className?: string;
  indicatorActive?: 'offline' | 'online';
}

const Avatar: FC<Props> = ({
  theme,
  shape,
  image,
  initials,
  size,
  indicatorActive,
  className,
}) => {
  let sizeClass = '';
  const shapeClass = shape === 'square' ? ' rounded-md ' : ' rounded-full ';
  const themeClass = theme === 'normal' ? ' hidden ' : ' block ';
  const indicatorActiveClass =
    indicatorActive === 'online' ? ' bg-green-500 ' : 'bg-gray-400 ';
  let indicatorClass = '';

  if (size === 'large') {
    sizeClass = ' w-20 h-20 text-2xl ';
    indicatorClass = ' bottom-1 right-1 w-4 h-4 ';
  } else if (size === 'medium') {
    sizeClass = ' w-16 h-16 text-xl ';
    indicatorClass = ' bottom-1 right-0 w-3.5 h-3.5 ';
  } else if (size === 'small') {
    sizeClass = ' w-14 h-14 text-lg ';
    indicatorClass = ' bottom-1 right-0 w-3.5 h-3.5 ';
  } else if (size === 'extraSmall') {
    sizeClass = ' w-10 h-10 ';
    indicatorClass = ' bottom-0 right-0 w-3 h-3 ';
  }

  return (
    <>
      <div className={'relative flex' + sizeClass}>
        {image && (
          <img
            className={'' + sizeClass + shapeClass}
            src={image}
            alt="profilePic"
          />
        )}
        {initials && (
          <span
            className={
              'relative text-white bg-gray-300 flex items-center justify-center tracking-widest font-semibold ' +
              sizeClass +
              shapeClass
            }
          >
            {initials}
          </span>
        )}
        {theme && (
          <div
            className={
              'absolute rounded-full border-2 border-white' +
              themeClass +
              indicatorClass +
              indicatorActiveClass
            }
          ></div>
        )}
      </div>
    </>
  );
};

Avatar.defaultProps = {
  theme: 'normal',
  size: 'large',
  shape: 'circle',
  indicatorActive: 'offline',
};

export default memo(Avatar);
