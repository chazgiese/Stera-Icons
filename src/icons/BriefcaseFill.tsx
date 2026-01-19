import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BriefcaseFillProps = Omit<IconBaseProps, 'children'>;

const BriefcaseFill = memo(
  forwardRef<SVGSVGElement, BriefcaseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-fill" {...props}>
      <path fill="currentColor" d="M23 16.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8v-4.85a53 53 0 0 0 3.63.97 45 45 0 0 0 4.87.91v.67a1 1 0 0 0 1 1h3a1 1 0 0 0 1-.9v-.77a45 45 0 0 0 4.88-.9 66 66 0 0 0 3.62-.98z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.27 2q.44 0 .8.02.27.01.58.1l.2.08.15.08q.49.27.81.76.22.37.3.75.06.34.13.79l.13.92h1.43q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.15l-.3.1h-.02l-.05.02-1 .3c-.69.19-1.64.45-2.72.7A33 33 0 0 1 12.07 12h-.14c-2.05-.01-4.68-.5-6.84-1.02a64 64 0 0 1-3.72-1.01l-.05-.02H1.3L1 9.85V9.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03h1.43l.13-.92q.06-.45.13-.8t.3-.74l.1-.14q.33-.46.86-.7l.2-.08q.3-.09.59-.1.35-.02.8-.02zM9.73 4l-.76.03-.1.08q.02-.04-.02.11l-.1.64-.1.64h6.7l-.1-.64-.13-.75-.1-.08-.1-.02-.65-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

BriefcaseFill.displayName = 'BriefcaseFill';

// Triple export pattern (lucide-react style)
export { BriefcaseFill, BriefcaseFill as BriefcaseFillIcon, BriefcaseFill as SiBriefcaseFill };
export default BriefcaseFill;
export type { BriefcaseFillProps };
