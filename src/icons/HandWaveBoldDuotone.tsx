import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandWaveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandWaveBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandWaveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-wave-bold-duotone" {...props}>
      <path d="M4.13 15.57a1 1 0 0 1 1.3.56 8.4 8.4 0 0 0 2.32 3.07 1 1 0 1 1-1.2 1.6 10 10 0 0 1-2.98-3.93 1 1 0 0 1 .56-1.3M18.67 2.74c1.21 0 2.22.6 2.9 1.35a4 4 0 0 1 1.12 2.67 1 1 0 1 1-2 0c0-.35-.19-.87-.6-1.32q-.62-.68-1.42-.7a1 1 0 0 1 0-2" opacity={0.4} />
        <path fillRule="evenodd" d="M9.75 3.79a2.6 2.6 0 0 1 3.56.95l1.5 2.6a2.6 2.6 0 0 1 5.07.73l.38 2.51a7.4 7.4 0 0 1-3.28 8.87 7.44 7.44 0 0 1-10.13-2.7l-2.8-4.84a2.6 2.6 0 0 1 1.5-3.78 2.59 2.59 0 0 1 3.36-3.56q.33-.47.84-.78m1.83 1.95a.6.6 0 0 0-.83-.22.6.6 0 0 0-.22.81l2.4 4.15a1 1 0 1 1-1.72 1L8.4 6.66a.6.6 0 0 0-.83-.22.6.6 0 0 0-.22.81l3 5.18a1 1 0 0 1-1.72 1l-1.8-3.1-.08-.1A.6.6 0 0 0 6 10.1a.6.6 0 0 0-.23.8l2.81 4.85a5.44 5.44 0 0 0 7.4 1.97 5.4 5.4 0 0 0 2.37-6.55l-.05-.2-.4-2.64-.01-.15a.6.6 0 0 0-.6-.6.6.6 0 0 0-.4.14.6.6 0 0 0-.21.46v.01l-.03 2.59a1 1 0 0 1-.5.86l-.04.02a2 2 0 0 0-.66.66q-.23.33-.26.71c-.01.25.04.6.3 1.05a1 1 0 0 1-1.73 1c-.44-.75-.6-1.49-.56-2.18.04-.68.29-1.25.58-1.68q.28-.41.58-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

HandWaveBoldDuotone.displayName = 'HandWaveBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandWaveBoldDuotone, HandWaveBoldDuotone as HandWaveBoldDuotoneIcon, HandWaveBoldDuotone as SiHandWaveBoldDuotone };
export default HandWaveBoldDuotone;
export type { HandWaveBoldDuotoneProps };
