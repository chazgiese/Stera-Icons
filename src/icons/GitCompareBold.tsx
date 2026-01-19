import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GitCompareBoldProps = Omit<IconBaseProps, 'children'>;

const GitCompareBold = memo(
  forwardRef<SVGSVGElement, GitCompareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-compare-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 1.5a3.5 3.5 0 0 1 1 6.85V16a4 4 0 0 1-4 4h-2.59l1.3 1.3a1 1 0 0 1-1.42 1.4l-3-3-.08-.1-.04-.05a1 1 0 0 1-.13-.26l-.01-.05a1 1 0 0 1 0-.47l.01-.06a1 1 0 0 1 .25-.42l3-3a1 1 0 1 1 1.42 1.42L13.4 18H16a2 2 0 0 0 2-2V8.35a3.5 3.5 0 0 1 1-6.85m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.3 1.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 .28.87v.01l-.01.06-.01.05a1 1 0 0 1-.25.42l-3 3a1 1 0 1 1-1.42-1.42L10.6 6H8a2 2 0 0 0-2 2v7.65a3.5 3.5 0 1 1-2 0V8a4 4 0 0 1 4-4h2.59l-1.3-1.3a1 1 0 0 1 0-1.4M5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCompareBold.displayName = 'GitCompareBold';

// Triple export pattern (lucide-react style)
export { GitCompareBold, GitCompareBold as GitCompareBoldIcon, GitCompareBold as SiGitCompareBold };
export default GitCompareBold;
export type { GitCompareBoldProps };
