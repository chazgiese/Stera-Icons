import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GithubBoldProps = Omit<IconBaseProps, 'children'>;

const GithubBold = memo(
  forwardRef<SVGSVGElement, GithubBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="github-bold" {...props}>
      <path fill="currentColor" d="M12.02 2c5.51 0 10 4.5 9.98 10.08 0 4.47-2.87 8.24-6.87 9.57-.49.1-.67-.23-.67-.5l.02-2.76c0-.94-.3-1.56-.68-1.86 2.24-.25 4.57-1.11 4.57-4.98 0-1.1-.37-2.01-1.02-2.7a3.6 3.6 0 0 0-.1-2.67c-.02 0-.87-.25-2.75 1.04q-1.22-.31-2.5-.32c-.84 0-1.7.1-2.5.32-1.9-1.3-2.75-1.04-2.75-1.04a3.6 3.6 0 0 0-.1 2.66 4 4 0 0 0-1.02 2.7c0 3.88 2.33 4.76 4.55 4.99-.29.24-.56.7-.64 1.35-.57.26-2 .7-2.9-.84 0 0-.54-.99-1.54-1.05 0 0-.97 0-.07.62.01 0 .66.31 1.11 1.47.01.03.6 1.8 3.36 1.21l.02 1.87c0 .26-.18.59-.68.49A10.1 10.1 0 0 1 2 12.08C2 6.51 6.47 2 12.02 2" />
    </IconBase>
  ))
);

GithubBold.displayName = 'GithubBold';

// Triple export pattern (lucide-react style)
export { GithubBold, GithubBold as GithubBoldIcon, GithubBold as SiGithubBold };
export type { GithubBoldProps };
