import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSadRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteSadRegular = memo(
  forwardRef<SVGSVGElement, EmoteSadRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 13.75c1.3 0 2.49.43 3.45 1.15a.75.75 0 0 1-.9 1.2 4.2 4.2 0 0 0-5.1 0 .75.75 0 0 1-.9-1.2A5.7 5.7 0 0 1 12 13.75M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadRegular.displayName = 'EmoteSadRegular';

export { EmoteSadRegular };
export type { EmoteSadRegularProps };
