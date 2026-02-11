import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeRegularProps = Omit<IconBaseProps, 'children'>;

const CodeRegular = memo(
  forwardRef<SVGSVGElement, CodeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="code" {...props}>
      <path d="M13.28 4.8a.75.75 0 1 1 1.44.4l-4 14a.75.75 0 0 1-1.44-.4zM6.47 7.47a.75.75 0 1 1 1.06 1.06L4.06 12l3.47 3.47a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06zM16.47 7.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L19.94 12l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CodeRegular.displayName = 'CodeRegular';

// Triple export pattern (lucide-react style)
export { CodeRegular, CodeRegular as CodeRegularIcon, CodeRegular as SiCodeRegular };
export default CodeRegular;
export type { CodeRegularProps };
