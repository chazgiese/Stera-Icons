import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCompareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCompareFillDuotone = memo(
  forwardRef<SVGSVGElement, GitCompareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-compare-fill-duotone" {...props}>
      <path d="M20 16a4 4 0 0 1-4 4h-2.59l-1-1 1-1H16a2 2 0 0 0 2-2V8.35a3.5 3.5 0 0 0 2 0zM11.59 5l-1 1H8a2 2 0 0 0-2 2v7.65a3.5 3.5 0 0 0-2 0V8a4 4 0 0 1 4-4h2.59z" opacity={0.4} />
        <path fill="currentColor" d="M13.3 15.3a1 1 0 1 1 1.4 1.4L12.42 19l2.3 2.3a1 1 0 0 1-1.42 1.4l-3-3a1 1 0 0 1 0-1.4zM5 15.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M9.3 1.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 1 1-1.4-1.4L11.58 5l-2.3-2.3a1 1 0 0 1 0-1.4M19 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

GitCompareFillDuotone.displayName = 'GitCompareFillDuotone';

// Triple export pattern (lucide-react style)
export { GitCompareFillDuotone, GitCompareFillDuotone as GitCompareFillDuotoneIcon, GitCompareFillDuotone as SiGitCompareFillDuotone };
export default GitCompareFillDuotone;
export type { GitCompareFillDuotoneProps };
