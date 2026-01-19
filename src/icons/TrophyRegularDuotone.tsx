import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrophyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrophyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-duotone" {...props}>
      <path d="M15.23 17.46c1.47.5 2.52 1.9 2.52 3.54v1c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75v-1a3.75 3.75 0 0 1 2.52-3.54l.6.96.23.33h.4c-1.24 0-2.25 1-2.25 2.25v.25h8.5V21c0-1.24-1-2.25-2.25-2.25h.4l.22-.33q.33-.5.6-.96M5.73 4v1.25H3.48a.5.5 0 0 0-.5.58l.46 2.72c.15.94.71 1.77 1.53 2.26l1.4.84q.25 1.04.64 2.13L4.2 12.09A4.8 4.8 0 0 1 1.96 8.8L1.5 6.08a2 2 0 0 1 1.98-2.33h2.27zM20.52 3.75a2 2 0 0 1 1.98 2.33l-.46 2.72a4.8 4.8 0 0 1-2.24 3.3L17 13.77q.38-1.08.63-2.13l1.4-.84a3.3 3.3 0 0 0 1.53-2.26l.46-2.72a.5.5 0 0 0-.5-.58h-2.25l-.02-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 1.25a2.77 2.77 0 0 1 2.77 2.74c.03 4.39-.05 9.03-3.65 14.43l-.22.33H9.6l-.22-.33C5.78 13.02 5.7 8.38 5.74 3.99A2.77 2.77 0 0 1 8.5 1.25zm-7 1.5c-.7 0-1.26.56-1.26 1.26-.04 4.22.04 8.38 3.17 13.24h3.18c3.13-4.86 3.21-9.02 3.18-13.24-.01-.7-.58-1.26-1.27-1.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyRegularDuotone.displayName = 'TrophyRegularDuotone';

// Triple export pattern (lucide-react style)
export { TrophyRegularDuotone, TrophyRegularDuotone as TrophyRegularDuotoneIcon, TrophyRegularDuotone as SiTrophyRegularDuotone };
export type { TrophyRegularDuotoneProps };
