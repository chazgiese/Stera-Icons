import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BriefcaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseFillDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-fill-duotone" {...props}>
      <path d="M23 16.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8v-4.85a53 53 0 0 0 3.63.97c1.46.35 3.2.7 4.87.91v.67a1 1 0 0 0 1 1h3a1 1 0 0 0 1-.9v-.77c1.68-.2 3.41-.56 4.88-.9a66 66 0 0 0 3.62-.98z" opacity={0.4} />
        <path d="M18.8 5.5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.15l-.3.1h-.02l-.05.02-1 .3c-.69.19-1.64.45-2.72.7A33 33 0 0 1 12.07 12h-.14c-2.05-.01-4.68-.5-6.84-1.02a64 64 0 0 1-3.72-1.01l-.05-.02H1.3L1 9.85V9.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03z" opacity={0.4} />
        <path fill="currentColor" d="M23 11.95a53 53 0 0 1-3.62.97c-1.47.35-3.2.7-4.88.91v.77a1 1 0 0 1-1 .9h-3a1 1 0 0 1-1-1v-.67c-1.68-.2-3.41-.56-4.87-.9A66 66 0 0 1 1 11.94v-2.1l.3.1h.02l.05.02 1 .3c.69.19 1.64.45 2.72.7C7.25 11.5 9.88 12 11.93 12h.14c2.05-.01 4.68-.5 6.84-1.02a64 64 0 0 0 3.72-1.01l.05-.02h.01l.31-.1zM14.27 2q.44 0 .8.02.27.01.58.1l.2.08.15.08q.49.27.81.76.22.37.3.75.06.34.13.79l.13.92h-2.02l-.1-.64-.13-.75-.1-.08-.1-.02-.65-.01H9.73l-.76.03-.1.08q.02-.04-.02.11l-.1.64-.1.64H6.63l.13-.92q.06-.45.13-.8t.3-.74l.1-.14q.33-.46.86-.7l.2-.08q.3-.09.59-.1.35-.02.8-.02z" />
    </IconBase>
  ))
);

BriefcaseFillDuotone.displayName = 'BriefcaseFillDuotone';

// Triple export pattern (lucide-react style)
export { BriefcaseFillDuotone, BriefcaseFillDuotone as BriefcaseFillDuotoneIcon, BriefcaseFillDuotone as SiBriefcaseFillDuotone };
export type { BriefcaseFillDuotoneProps };
