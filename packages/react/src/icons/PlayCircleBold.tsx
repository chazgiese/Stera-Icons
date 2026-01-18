import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlayCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PlayCircleBold = memo(
  forwardRef<SVGSVGElement, PlayCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.94 6.87c.34-.02.74.25 1.55.79l4.51 3c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95l-4.51 3.01c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V9c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleBold.displayName = 'PlayCircleBold';

export { PlayCircleBold };
export type { PlayCircleBoldProps };
