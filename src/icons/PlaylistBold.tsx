import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlaylistBoldProps = Omit<IconBaseProps, 'children'>;

const PlaylistBold = memo(
  forwardRef<SVGSVGElement, PlaylistBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="playlist-bold" {...props}>
      <path fillRule="evenodd" d="M15 12.9a1.5 1.5 0 0 1 2.1-1.38l.19.1 5.04 3.1a1.5 1.5 0 0 1 0 2.56l-5.04 3.1A1.5 1.5 0 0 1 15 19.11zm2 5.31L20.6 16 17 13.79z" clipRule="evenodd" />
        <path d="M12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

PlaylistBold.displayName = 'PlaylistBold';

// Triple export pattern (lucide-react style)
export { PlaylistBold, PlaylistBold as PlaylistBoldIcon, PlaylistBold as SiPlaylistBold };
export default PlaylistBold;
export type { PlaylistBoldProps };
