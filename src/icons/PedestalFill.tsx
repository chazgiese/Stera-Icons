import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalFillProps = Omit<IconBaseProps, 'children'>;

const PedestalFill = memo(
  forwardRef<SVGSVGElement, PedestalFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-fill" {...props}>
      <path fillRule="evenodd" d="M19 3q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23h-.08a3 3 0 0 1-1.87 3.86l.03.26q.03.4.02.9v5a1 1 0 1 1-2 0v-5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L15 14H9l-.87.03a.3.3 0 0 0-.1.1l-.02.13L8 15v5a1 1 0 1 1-2 0v-5q0-.5.02-.9l.03-.26a3 3 0 0 1-1.87-3.86H4.1a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q2 7.5 2 7V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 3 5 3zM7 10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z" clipRule="evenodd" />
        <path d="M10.25 15a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M13.75 15a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PedestalFill.displayName = 'PedestalFill';

// Triple export pattern (lucide-react style)
export { PedestalFill, PedestalFill as PedestalFillIcon, PedestalFill as SiPedestalFill };
export default PedestalFill;
export type { PedestalFillProps };
