import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RocketRegularProps = Omit<IconBaseProps, 'children'>;

const RocketRegular = memo(
  forwardRef<SVGSVGElement, RocketRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.5 19.25c.41 0 .75.34.75.75q-.01.49-.27.96A5.4 5.4 0 0 1 12 22.9a5.4 5.4 0 0 1-1.98-1.94 2 2 0 0 1-.27-.96c0-.41.34-.75.75-.75zM12 7.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M11.58 1.38a.8.8 0 0 1 .84 0 11.7 11.7 0 0 1 4.54 5.2c.43 1.03.64 2.06.72 3.04l2.85 2.85q.26.27.21.64l-1 6.5a.75.75 0 0 1-1.14.53l-3.81-2.39H9.2L5.4 20.14a.75.75 0 0 1-1.14-.53l-1-6.5a.8.8 0 0 1 .21-.64l2.85-2.85q.1-1.48.72-3.03a11.7 11.7 0 0 1 4.54-5.21M4.8 13.26l.77 5 2.42-1.51a14 14 0 0 1-1.6-4.9l-.03-.15zm12.82-1.42a14 14 0 0 1-1.6 4.9l2.41 1.52.77-5-1.57-1.56zM12 2.91a10 10 0 0 0-3.57 4.25 9 9 0 0 0-.56 4.5 13 13 0 0 0 1.54 4.57l.01.02h5.16v-.02a13 13 0 0 0 1.55-4.57c.18-1.4.09-2.96-.56-4.5A10 10 0 0 0 12 2.91" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketRegular.displayName = 'RocketRegular';

// Triple export pattern (lucide-react style)
export { RocketRegular, RocketRegular as RocketRegularIcon, RocketRegular as SiRocketRegular };
export type { RocketRegularProps };
