import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandWaveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandWaveFillDuotone = memo(
  forwardRef<SVGSVGElement, HandWaveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-wave-fill-duotone" {...props}>
      <path d="M2.63 16.07a1 1 0 0 1 1.3.56c.3.74 1.27 2.52 2.67 3.57a1 1 0 1 1-1.2 1.6 11.4 11.4 0 0 1-3.33-4.43 1 1 0 0 1 .56-1.3M10.17 4.12a.93.93 0 0 1 1.27.34l3.4 5.88q-.38.35-.77.9c-.33.5-.62 1.15-.67 1.93q-.1 1.18.65 2.5a1 1 0 0 0 1.73-1 2.4 2.4 0 0 1-.38-1.37q.04-.54.34-.95a3 3 0 0 1 .85-.85l.05-.04h.01l.1-.07a1 1 0 0 0 .4-.79l.03-3.1v-.01a.92.92 0 0 1 .93-.92c.51 0 .92.42.92.92l.01.15.48 3.17.06.2a6.64 6.64 0 0 1-2.93 8.1 6.7 6.7 0 0 1-9.16-2.44l-3.37-5.81a.9.9 0 0 1 .34-1.25.93.93 0 0 1 1.22.26l.05.08 2.16 3.73a1 1 0 0 0 1.73-1l-3.6-6.22a.9.9 0 0 1 .33-1.25.93.93 0 0 1 1.27.34l3.37 5.8a1 1 0 0 0 1.73-1L9.83 5.37a.9.9 0 0 1 .34-1.25M19.5 1.5c1.35 0 2.47.67 3.24 1.51A4.6 4.6 0 0 1 24 6a1 1 0 0 1-2 0c0-.45-.24-1.1-.74-1.64a2.4 2.4 0 0 0-1.76-.86 1 1 0 0 1 0-2" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.17 2.39c1.4-.8 3.19-.33 4 1.07L15.22 7a2.9 2.9 0 0 1 2.89-2.43 2.9 2.9 0 0 1 2.92 2.82l.46 3.03a8.64 8.64 0 0 1-3.84 10.42 8.7 8.7 0 0 1-11.89-3.17l-3.37-5.8a2.9 2.9 0 0 1 1.95-4.32l-.06-.09A2.91 2.91 0 0 1 8.13 3.4q.38-.62 1.04-1.01m2.27 2.07a.93.93 0 0 0-1.27-.34.9.9 0 0 0-.34 1.25l2.89 4.98a1 1 0 1 1-1.73 1l-3.37-5.8a.93.93 0 0 0-1.27-.34.9.9 0 0 0-.34 1.25l3.61 6.22a1 1 0 0 1-1.73 1L5.73 9.95l-.05-.08a.93.93 0 0 0-1.22-.26.9.9 0 0 0-.34 1.25l3.37 5.8a6.7 6.7 0 0 0 9.16 2.45 6.64 6.64 0 0 0 2.87-8.3l-.48-3.17v-.15c0-.5-.42-.92-.93-.92a.9.9 0 0 0-.93.92l-.03 3.11a1 1 0 0 1-.5.86l-.06.04a3 3 0 0 0-.85.85q-.3.42-.34.95c-.02.34.05.8.38 1.37a1 1 0 0 1-1.73 1q-.74-1.32-.65-2.5c.05-.78.34-1.43.67-1.93a5 5 0 0 1 .78-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

HandWaveFillDuotone.displayName = 'HandWaveFillDuotone';

// Triple export pattern (lucide-react style)
export { HandWaveFillDuotone, HandWaveFillDuotone as HandWaveFillDuotoneIcon, HandWaveFillDuotone as SiHandWaveFillDuotone };
export type { HandWaveFillDuotoneProps };
