import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicatePlusFillProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusFill = memo(
  forwardRef<SVGSVGElement, DuplicatePlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="duplicate-plus-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 2c1.31 0 2.22-.01 2.99.25a4.5 4.5 0 0 1 2.76 2.76c.2.56.24 1.2.25 2l.78.04a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.38.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05h-1.8q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76L7.01 17a6 6 0 0 1-2-.25 4.5 4.5 0 0 1-2.76-2.76C2 13.22 2 12.3 2 11V8.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.16 2 8.6 2zm3.5 8.5a1 1 0 0 0-1 1v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1M8.6 4c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 6.92 4 7.6 4 8.6V11c0 1.48.01 1.97.14 2.33a2.5 2.5 0 0 0 1.53 1.53c.27.1.6.12 1.33.13V13.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q12.16 7 13.6 7H15a4 4 0 0 0-.14-1.33 2.5 2.5 0 0 0-1.53-1.53C12.97 4.01 12.48 4 11 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

DuplicatePlusFill.displayName = 'DuplicatePlusFill';

// Triple export pattern (lucide-react style)
export { DuplicatePlusFill, DuplicatePlusFill as DuplicatePlusFillIcon, DuplicatePlusFill as SiDuplicatePlusFill };
export default DuplicatePlusFill;
export type { DuplicatePlusFillProps };
