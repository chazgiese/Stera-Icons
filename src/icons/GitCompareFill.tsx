import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCompareFillProps = Omit<IconBaseProps, 'children'>;

const GitCompareFill = memo(
  forwardRef<SVGSVGElement, GitCompareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-compare-fill" {...props}>
      <path fill="currentColor" d="M19 1.5a3.5 3.5 0 0 1 1 6.85V16a4 4 0 0 1-4 4h-2.59l1.3 1.3a1 1 0 0 1-1.42 1.4l-3-3-.08-.1-.04-.05a1 1 0 0 1-.13-.26l-.01-.05a1 1 0 0 1 0-.47l.01-.06a1 1 0 0 1 .25-.42l3-3a1 1 0 1 1 1.42 1.42L13.4 18H16a2 2 0 0 0 2-2V8.35a3.5 3.5 0 0 1 1-6.85M9.3 1.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 .28.87v.01l-.01.06-.01.05a1 1 0 0 1-.25.42l-3 3a1 1 0 1 1-1.42-1.42L10.6 6H8a2 2 0 0 0-2 2v7.65a3.5 3.5 0 1 1-2 0V8a4 4 0 0 1 4-4h2.59l-1.3-1.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

GitCompareFill.displayName = 'GitCompareFill';

// Triple export pattern (lucide-react style)
export { GitCompareFill, GitCompareFill as GitCompareFillIcon, GitCompareFill as SiGitCompareFill };
export type { GitCompareFillProps };
