import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GithubFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GithubFillDuotone = memo(
  forwardRef<SVGSVGElement, GithubFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="github-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.02 2C6.47 2 2 6.5 2 12.08c0 4.47 2.87 8.24 6.84 9.57.5.1.68-.23.68-.5L9.5 19.3c-2.79.6-3.36-1.2-3.36-1.2-.45-1.18-1.1-1.48-1.1-1.48-.9-.62.06-.62.06-.62 1 .06 1.53 1.05 1.53 1.05.9 1.53 2.34 1.1 2.91.84.08-.66.35-1.1.64-1.35-2.22-.23-4.55-1.11-4.55-4.98 0-1.1.39-2.01 1.02-2.7a3.6 3.6 0 0 1 .1-2.67S7.6 5.9 9.5 7.22A9 9 0 0 1 12 6.9q1.28.01 2.5.32c1.9-1.3 2.74-1.04 2.74-1.04.56 1.4.2 2.42.1 2.66.66.7 1.03 1.6 1.03 2.7 0 3.88-2.33 4.74-4.57 4.99.37.3.68.92.68 1.86l-.02 2.77c0 .26.18.59.67.49 4-1.33 6.87-5.1 6.87-9.57A10 10 0 0 0 12.02 2" opacity={.4} />
        <path fill="currentColor" d="M17.24 6.18c.56 1.4.2 2.42.1 2.66.66.7 1.03 1.6 1.03 2.7 0 3.88-2.33 4.74-4.57 4.99.37.3.68.92.68 1.86l-.02 2.77q0 .09.03.18a9.7 9.7 0 0 1-5 0l.03-.18-.02-1.87c-2.76.59-3.35-1.18-3.36-1.2-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.06-.62.06-.62 1 .06 1.53 1.05 1.53 1.05.9 1.53 2.34 1.1 2.91.84.08-.66.35-1.1.64-1.35-2.22-.23-4.55-1.11-4.55-4.98 0-1.11.39-2.01 1.02-2.7a3.6 3.6 0 0 1 .1-2.67S7.6 5.9 9.5 7.22A9 9 0 0 1 12 6.9q1.28.01 2.5.32c1.88-1.3 2.72-1.05 2.74-1.04" />
    </IconBase>
  ))
);

GithubFillDuotone.displayName = 'GithubFillDuotone';

// Triple export pattern (lucide-react style)
export { GithubFillDuotone, GithubFillDuotone as GithubFillDuotoneIcon, GithubFillDuotone as SiGithubFillDuotone };
export default GithubFillDuotone;
export type { GithubFillDuotoneProps };
