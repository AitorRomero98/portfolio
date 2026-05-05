/* ============================================================================
 * Feed Builder
 * ============================================================================
 * Composes heterogeneous content into a unified, ordered feed.
 */

import type { MediaPost, TextPost } from "../content-models/post";


/* --------------------------------------------------------------------------
 * Feed builder
 * -------------------------------------------------------------------------- */

export function buildFeed(
    textPost: TextPost[],
    mediaPost: MediaPost[]
) {
    const textItems: TextPost[] = textPost.map((post) => ({
        id: post.id,
        slug: post.slug,
        visibility: post.visibility,
        createdAt: post.createdAt,
        type: "text",
        content: post.content,
        title: post.title
    }));

    const mediaItems: MediaPost[]=mediaPost.map((post)=> ({
        id: post.id,
        slug: post.slug,
        visibility: post.visibility,
        createdAt: post.createdAt,
        type: "media",
        source: post.source,
        title: post.title
    }))


    /* --------------------------------------------------------------------------
    
     * Not used yet
    
        const projectEntryItems: ProjectEntryFeedItem[] = projects.flatMap(
            (project) =>
                project.entries.map((entry) => ({
                    id: `${project.id}:${entry.id}`,
                    type: "project-entry",
                    projectSlug: project.slug,
                    entryId: entry.id,
                    createdAt: entry.createdAt,
                    blocks: entry.blocks
                }))
        );
    
     * -------------------------------------------------------------------------- */


    return [...textItems, ...mediaItems].sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
