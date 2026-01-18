import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RocketRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketRegularDuotone = memo(
  forwardRef<SVGSVGElement, RocketRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.32 9.62q-.07 1.08.04 2.08L4.8 13.26l.77 5 2.42-1.51.12.22.19.32.05.09.02.02v.01q.24.33.63.34h.21L5.4 20.14a.75.75 0 0 1-1.14-.53l-1-6.5a.8.8 0 0 1 .21-.64zM20.53 12.47q.26.27.21.64l-1 6.5a.75.75 0 0 1-1.14.53l-3.81-2.39H15q.4-.01.62-.34h.01l.02-.03.24-.4.12-.23 2.42 1.51.77-5-1.57-1.56q.12-1 .05-2.08zM12 7.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fill="currentColor" d="M13.5 19.25c.41 0 .75.34.75.75v.12l-.04.2q-.05.27-.23.64c-.25.5-.71 1.1-1.56 1.66l-.41.28-.42-.27a4.4 4.4 0 0 1-1.57-1.67 3 3 0 0 1-.27-.94V20c0-.41.34-.75.75-.75z" />
        <path fill="currentColor" fillRule="evenodd" d="M11.58 1.38a.8.8 0 0 1 .84 0 11.7 11.7 0 0 1 4.54 5.2c.76 1.84.86 3.66.66 5.26a14 14 0 0 1-1.97 5.54l-.02.02v.01a.8.8 0 0 1-.54.33l-.09.01H8.9a.8.8 0 0 1-.52-.33l-.01-.02-.02-.02-.24-.4a14 14 0 0 1-1.73-5.14c-.2-1.6-.1-3.42.66-5.25a11.7 11.7 0 0 1 4.54-5.21M12 2.9a10 10 0 0 0-3.57 4.25 9 9 0 0 0-.56 4.5 13 13 0 0 0 1.54 4.57l.01.02h5.16v-.02a13 13 0 0 0 1.55-4.57c.18-1.4.09-2.96-.56-4.5A10 10 0 0 0 12 2.91" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketRegularDuotone.displayName = 'RocketRegularDuotone';

// Triple export pattern (lucide-react style)
export { RocketRegularDuotone, RocketRegularDuotone as RocketRegularDuotoneIcon, RocketRegularDuotone as SiRocketRegularDuotone };
export type { RocketRegularDuotoneProps };
